const CardList = ({children}) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pb-5 mb-5">
        {children}
      </div>
    </>
  );
};

export default CardList;
