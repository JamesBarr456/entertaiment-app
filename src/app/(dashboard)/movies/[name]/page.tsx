export default function NamePage({ params }: { params: { name: string } }) {
  return (
    <div>
      <h1 className="text-white">Hello {params.name}</h1>
    </div>
  );
}
