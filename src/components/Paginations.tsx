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
  // Llamamos al zustang para accder a los datos de paginacion
  const { currentPage, totalPages, setCurrentPage } = usePaginationStore();

  // Funcion para retroceder la paginacion
  const handlerButtonPrevius = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // Funcion para avanzar la paginacion
  const handlerButtonNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Funcion para generar el array de paginacion
  const generatePaginationItems = () => {
    const items = [];
    let startPage = Math.max(1, currentPage - 2); // Ajuste inicial para centrarse alrededor de la página actual
    let endPage = Math.min(totalPages, startPage + 4); // Asegurarse de no exceder el total de páginas

    // Si la página actual está cerca del final, ajustamos el rango
    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    // Generar los números de las páginas
    for (let i = startPage; i <= endPage; i++) {
      items.push(i);
    }

    return items;
  };

  return (
    <Pagination>
      <PaginationContent className="text-white">
        {/* Items de Previuos */}
        <PaginationItem onClick={handlerButtonPrevius}>
          <PaginationPrevious href="" />
        </PaginationItem>

        {/* Aqui empieza logica de los items  */}
        {generatePaginationItems().map((item, index) => (
          <PaginationItem key={index} onClick={() => setCurrentPage(item)}>
            <PaginationLink href="#" isActive={item === currentPage}>
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* {generatePaginationItems()} */}
        {/* Aqui termina logica de los items  */}

        {/* Items de los puntitos */}
        {/* Item de Next */}
        <PaginationItem onClick={handlerButtonNext}>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
