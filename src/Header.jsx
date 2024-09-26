
function Header() {
  return (
    <div className="w-full">
      <div className="block w-full text-white shadow-secondary-1 dark:bg-surface-dark">
        <img
          className="w-full h-svh"
          src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1300&userId=&cache=v2"
          alt="Card"
        />
        <div className="absolute top-0 p-16 m-10 h-full flex flex-col items-start justify-around">
          <h5 className="mb-2 text-4xl sm:text-2lg font-medium leading-tight">
            Card title
          </h5>
          <p className="mb-4 text-5xl sm:text-2lg m-8">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <p className="text-lg sm:text-base m-8">
            Last updated 3 mins ago
          </p>
          <button className="bg-[#F8B901] btn-active p-8 m-8 text-lg rounded-lg border-white">
            Order Now
          </button>
        </div>
      </div>

      {/*  ////////////////////////////////////////////////////////////////////////////////////////////  */}

      {/* /////////////////////////////// */}
      
    </div>
  );
};

export default Header;
