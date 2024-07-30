const Grocery = () => {
  return (
    <div className="py-12 px-5 md:p-6">
      <h1 className="text-center font-bold text-xl text-orange-600">
        Grocery page
      </h1>
      <ul className="list-disc">
        <li>Grocery page is created using Code-Splitting.</li>
        <li>
          Code-Splitting is a feature supported by bundlers like Webpack, which
          can create multiple bundles that can be dynamically loaded at runtime.
        </li>
        <li>
          With Code-Splitting we can split the code into smaller bundles and
          they are loaded only when user navigates to certain page.
        </li>
        <li>
          Code-Splitting is also known as chuncking, lazy loading, on-demand
          loading, dynamic bundling and dynamic import.
        </li>
      </ul>
    </div>
  );
};
export default Grocery;
