package com.bharathkalyans.precize.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "Bharath Kalyan S",
                        email = "sbharath25@gmail.com",
                        url = "https://twitter.com/bharathkalyans"
                ),
                description = "OpenApi Documentation",
                title = "Service for Fetching and Persisting Students Data",
                version = "1.0",
                summary = "Add summary of your Service",
                license = @License(name = "MIT-License")
        )
//        servers = {
//                @Server(
//                        description = "Local Dev",
//                        url = "http://localhost:8080"
//                )
//        }
)
public class OpenApiConfig {
}
