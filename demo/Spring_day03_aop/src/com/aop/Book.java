package com.aop;

import org.springframework.stereotype.Component;

@Component(value="book")
public class Book {
	public void add(){
		System.out.println("add......");
	}
}
