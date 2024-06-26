"use client";

import { usePathname } from "next/navigation";

import { PAGE_SIZE } from "@/lib/constants";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export default function MainPagination({
  page,
  total,
}: {
  page: number | string;
  total: number;
}) {
  const currentPage = parseInt(page as string) || 1;
  const totalPages = Math.ceil(total / PAGE_SIZE);
  const path = usePathname();

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <PaginationItem key={1}>
          <PaginationLink href={`${path}?page=${1}`}>1</PaginationLink>
        </PaginationItem>,
      );
      if (startPage > 2) {
        pageNumbers.push(<PaginationEllipsis key="startEllipsis" />);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            href={`${path}?page=${i}`}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(<PaginationEllipsis key="endEllipsis" />);
      }
      pageNumbers.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href={`${path}?page=${totalPages}`}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pageNumbers;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`${path}?page=${currentPage - 1}`}
            disabled={currentPage === 1}
          />
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          <PaginationNext
            href={`${path}?page=${currentPage + 1}`}
            disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
