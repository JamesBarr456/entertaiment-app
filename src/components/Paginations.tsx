import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import usePaginationStore from "@/store/store";

export function Paginations() {
  const { currentPage, totalPages, setCurrentPage } = usePaginationStore();
  const handlerButtonPrevius = () => {
    if (currentPage <= 0) return;
    setCurrentPage(currentPage - 1);
  };
  const handlerButtonNext = () => {
    if (currentPage > totalPages) return;
    setCurrentPage(currentPage + 1);
  };
  return (
    <Pagination>
      <PaginationContent className="text-white">
        {/* Items de Previuos */}
        <PaginationItem onClick={handlerButtonPrevius}>
          <PaginationPrevious href="" />
        </PaginationItem>

        {/* Aqui empieza logica de los items  */}
        {/* TODO: generar 5 items del totalPages  */}
        {/* TODO-2: Colocar el "isActive" segun la pagina donde este */}
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        {/* Aqui termina logica de los items  */}

        {/* Items de los puntitos */}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {/* Item de Next */}
        <PaginationItem onClick={handlerButtonNext}>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
