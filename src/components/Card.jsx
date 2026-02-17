const Card = ({ c }) => {
  return (
    <div className="flex flex-col items-center font-dm font-bold mt-10">
      <div className="flex flex-col gap-3">
        <div>
          <div>
            {c.popular && <p className="absolute m-2 bg-popular text-black rounded-xl text-[10px] px-3 py-1">Popular</p>}
            <img className="rounded-xl" src={c.image} />
          </div>
        </div>
        <div className="flex justify-between text-[14px]">
          <h2>{c.name}</h2>
          <p className="bg-price text-black rounded-md text-[12px] px-2 content-center">{c.price}</p>
        </div>
        <div className="flex justify-between text-[14px]">
          <div className="flex gap-1">
            {c.votes > 0 ? (
            <img src="/public/star_fill.svg" alt="star" />
          ) : (
            <img src="/public/star.svg" alt="star" />
          )}
          <p>{c.rating != null ? Number(c.rating).toFixed(1) : c.rating}</p>
          {c.votes > 0 ? <p className="text-zinc-500">({c.votes} votes)</p> : <p className="text-textgrey">No ratings</p>}
          </div>
         <div>
             {!c.available && <p className="text-soldout"> Sold out</p>} 
         </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
