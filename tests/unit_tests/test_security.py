import unittest
from app.core.security import verify_password, get_password_hash

class TestPasswordHashing(unittest.TestCase):

    def test_password_hashing(self):
        # Test case 1: Hashing and verifying correct password
        password = "secure_password"
        hashed_password = get_password_hash(password)

        self.assertTrue(verify_password(password, hashed_password))

        # Test case 2: Verifying incorrect password
        wrong_password = "wrong_password"
        self.assertFalse(verify_password(wrong_password, hashed_password))

    def test_password_hashing_with_empty_password(self):
        # Test case 3: Hashing and verifying an empty password
        empty_password = ""
        hashed_empty_password = get_password_hash(empty_password)

        self.assertTrue(verify_password(empty_password, hashed_empty_password))

    def test_password_hashing_with_different_passwords(self):
        # Test case 4: Hashing and verifying different passwords
        password1 = "password_1"
        password2 = "password_2"
        hashed_password1 = get_password_hash(password1)

        self.assertFalse(verify_password(password2, hashed_password1))
