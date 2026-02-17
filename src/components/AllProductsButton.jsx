const AllProductsButton = ({ showAll, setShowAll }) => {

    return (
        <button
          className={showAll ? "bg-chosenbutton rounded-xl py-2 px-4 " : ""}
          onClick={() => setShowAll(true)}
        >
          All Products
        </button>
    )
}

export default AllProductsButton;