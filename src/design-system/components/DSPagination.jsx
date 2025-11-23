import React from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { styled } from "@mui/material/styles";

export default function DSPagination({
  page = 1,
  totalPages = 5,
  onChange,
}) {
  const PageButton = styled("button")(({ theme, active }) => ({
    width: 36,
    height: 36,
    borderRadius: "8px",
    border: "1px solid",
    borderColor: active
      ? theme.palette.primary.main
      : theme.palette.neutral[300],
    background: active
      ? `${theme.palette.primary.main}22`
      : "#fff",
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.2s",
    color: active
      ? theme.palette.primary.dark
      : theme.palette.text.primary,

    "&:hover": {
      background: active
        ? `${theme.palette.primary.main}33`
        : theme.palette.neutral[200],
    },
  }));

  const handleClick = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    onChange(newPage);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {/* PREVIOUS */}
      <IconButton
        size="small"
        disabled={page === 1}
        onClick={() => handleClick(page - 1)}
      >
        <ChevronLeft size={20} />
      </IconButton>

      {/* NUMBERS */}
      {[...Array(totalPages)].map((_, i) => {
        const number = i + 1;
        return (
          <PageButton
            key={number}
            active={number === page ? 1 : 0}
            onClick={() => handleClick(number)}
          >
            {number}
          </PageButton>
        );
      })}

      {/* NEXT */}
      <IconButton
        size="small"
        disabled={page === totalPages}
        onClick={() => handleClick(page + 1)}
      >
        <ChevronRight size={20} />
      </IconButton>
    </Box>
  );
}
