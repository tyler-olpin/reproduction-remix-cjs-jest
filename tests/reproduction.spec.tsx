import { render, screen } from "@testing-library/react";
import { createRemixStub } from "@remix-run/testing";
// 1️⃣→ COMMENT OUT THE NEXT LINE
import { Link } from "@remix-run/react";

// 2️⃣→ UNCOMMENT THIS CODEBLOCK
// const Link = ({ children, to = "" }: { children: any; to: string }) => {
//   return children;
// };

describe("reproduction", () => {
  it("should work", () => {
    function Component() {
      return (
        <Link to="/">
          <button>Hello World</button>
        </Link>
      );
    }

    const RemixStub = createRemixStub([
      {
        path: "/",
        Component
      }
    ]);

    render(<RemixStub/>);
    expect(screen.getByRole("button").innerHTML).toEqual("Hello World");
  });
});
