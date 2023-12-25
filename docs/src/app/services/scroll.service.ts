import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface ISection {
    readonly label: string;
    readonly nativeElement: HTMLElement;
}

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  public sections = new Array<ISection>();
  public currentSection?: ISection;

  constructor(
    private readonly _viewportScroller: ViewportScroller,
    private readonly _router: Router
  ) {
    window.addEventListener('scroll', () => this.triggerScroll(window.scrollY));
  }

  public registerSection(label: string, nativeElement: HTMLElement, anchorName: string) {
    nativeElement.id = anchorName;
    this.sections.push({ label, nativeElement });
    this.triggerScroll(window.screenY);
  }

  public scrollTo(section: ISection): void {
    this.currentSection = section;
    this._viewportScroller.scrollToAnchor(section.nativeElement.id);
  }

  public scrollToNext(): void {
    const currentIdx = this.sections.findIndex(section => section === this.currentSection);
    if (0 <= currentIdx && currentIdx < this.sections.length - 1) {
      this.scrollTo(this.sections[currentIdx + 1]);
    }
  }

  private async triggerScroll(posY: number): Promise<void> {

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.sections[i];

      if (section.nativeElement.offsetTop <= posY + 2) {
        this.currentSection = section;
        await this._router.navigate([], { fragment: this.currentSection?.nativeElement.id });
        break;
      }
    }
  }
}
