{
  resMenu.length > 0 ? (
    resMenu.map((category) => (
      <div key={category?.card?.card?.title}>
        <h1>{category?.card?.card?.title}</h1>
        {category?.card?.card?.itemCards &&
          category?.card?.card?.itemCards.map((item) => (
            <div className=" menu text-red-600">
              <h3>{item?.card?.info?.name}</h3>
            </div>
          ))}
      </div>
    ))
  ) : (
    <h1>"not"</h1>
  );
}
