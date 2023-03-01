package com.conet.adressbuch.hashing;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Component
public class PasswordHashing {

    public String doHasching(String password){
        try {
            MessageDigest messageDigest = MessageDigest.getInstance("MD5");

            messageDigest.update(password.getBytes());

            byte[] resultBytearray = messageDigest.digest();

            StringBuilder stringBuilder = new StringBuilder();

            for (byte b: resultBytearray) {
                // %02x für hexadecimal
                stringBuilder.append(String.format("%02x",b));
            }
            return stringBuilder.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return "";
    }

}
