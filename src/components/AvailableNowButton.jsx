const AvailableNowButton = ({ showAll, setShowAll }) => {

    return(
        <button
          className={!showAll ? "bg-chosenbutton rounded-xl py-2 px-4" : ""}
          onClick={() => setShowAll(!showAll)}
        >
          Available Now
        </button>
    )
}

export default AvailableNowButton;