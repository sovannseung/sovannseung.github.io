package com.wap.customertag;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class LoopTagHandler extends SimpleTagSupport {

	private List items;
	private String var;

	public void setItems(List items) {
		this.items = items;
	}

	public void setVar(String var) {
		this.var = var;
	}

	public void doTag() throws JspException, IOException {
		Iterator i = items.iterator();
		while (i.hasNext()) {
			getJspContext().setAttribute(var, i.next());
			getJspBody().invoke(null); // This cause body to be evaluated
			//It’s easy to loop the body of a Simple tag; you just keep calling invoke() on the body, from within doTag().
		}
	}
}
