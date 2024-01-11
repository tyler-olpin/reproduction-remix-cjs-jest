import { render, screen } from "@testing-library/react";
// 1️⃣→ COMMENT OUT THE NEXT LINE
import { Link } from "@remix-run/react";

// 2️⃣→ UNCOMMENT THIS CODEBLOCK
// const Link = ({ children, to = "" }: { children: any; to: string }) => {
//   return children;
// };

describe("reproduction", () => {
  it("should work", () => {
    render(
      <Link to="/">
        <button>Hello World</button>
      </Link>
    );
    expect(screen.getByRole("button").innerHTML).toEqual("Hello World");
  });
});
