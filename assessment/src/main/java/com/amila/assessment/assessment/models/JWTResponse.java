package com.amila.assessment.assessment.models;

public class JWTResponse {
	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwttoken;

	public JWTResponse(String jwttoken) {
		this.jwttoken = jwttoken;
	}

	public String getToken() {
		return this.jwttoken;
	}
}
