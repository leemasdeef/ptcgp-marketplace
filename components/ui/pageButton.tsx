"use client";
import { useState } from "react";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function PageButtons() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex">
      {page > 1 && (
        <Button onClick={() => setPage(page - 1)}>
          <ChevronLeft />
        </Button>
      )}
      <Button>{page}</Button>
      <Button onClick={() => setPage(page + 1)}>
        <ChevronRight />
      </Button>
    </div>
  );
}
