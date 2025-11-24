import React from "react";
import {
  Box,
  Stack,
  Breadcrumbs,
  Link,
  Typography,
  Button,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function DSHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  // breadcrumbs
  const pathParts = location.pathname.split("/").filter(Boolean);

  const breadcrumbItems = [
    <Link
      key="home"
      underline="hover"
      onClick={() => navigate("/")}
      sx={{ cursor: "pointer", fontWeight: 500 }}
      color="inherit"
    >
      Home
    </Link>,
    ...pathParts.map((part, index) => {
      const fullPath = "/" + pathParts.slice(0, index + 1).join("/");

      return (
        <Link
          key={fullPath}
          underline="hover"
          onClick={() => index !== pathParts.length - 1 && navigate(fullPath)}
          sx={{
            cursor: index === pathParts.length - 1 ? "default" : "pointer",
            fontWeight: index === pathParts.length - 1 ? 700 : 400,
          }}
          color={index === pathParts.length - 1 ? "text.primary" : "inherit"}
        >
          {part.charAt(0).toUpperCase() + part.slice(1)}
        </Link>
      );
    }),
  ];

  // nav links
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Foundation", path: "/foundation" },
    { label: "Tokens", path: "/tokens" },
    { label: "Components", path: "/components" },
    { label: "Guidelines", path: "/guidelines" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#FFF",
        boxShadow: 1,
        padding: "10px 24px",
      }}
    >
      <Stack spacing={2}>
        {/* TOP ROW — Logo + Navigation */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Logo / Title */}
          <Typography variant="h6" fontWeight={700}>
            CITEC DS
          </Typography>

          {/* Navigation Menu */}
          <Stack direction="row" spacing={2}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  textTransform: "none",
                  fontWeight:
                    location.pathname === item.path ? 700 : 500,
                  color:
                    location.pathname === item.path
                      ? "primary.main"
                      : "text.secondary",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Stack>

        {/* Breadcrumb */}
        <Breadcrumbs separator="›">{breadcrumbItems}</Breadcrumbs>
      </Stack>
    </Box>
  );
}
