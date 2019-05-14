import testHelper from "./testHelper";
import fetchMock from "fetch-mock";
import ShelvesContainer from "../../app/javascript/react/containers/ShelvesContainer";
import Shelf from "../../app/javascript/react/components/Shelf";

describe("ShelvesContainer", () => {
  let wrapper
  let user_1 = {
    email: "user1@test.com",
    first_name: "name",
    image_url: "",
    access_token: "",
    access_token_secret: ""
  }
  let shelves = [
    {
      id: 1,
      user: user_1,
      name: "My Bookshelf",
      description: "Description of my bookshelf"
    }
  ]

  beforeEach(() => {
    fetchMock.get('/api/v1/shelves', {
      status: 200,
      body: { shelves }
    });
    wrapper = mount(<ShelvesContainer/>);
  });

  afterEach(fetchMock.restore);

  it("renders the shelf container on the page", done => {
    setTimeout(() => {
      expect(wrapper.find(ShelvesContainer)).toBePresent();
      done();
    }, 0);
  });

  it("renders an h1 tag that says 'These are Your Bookshelves'", done => {
    setTimeout(() => {
      expect(wrapper.find("h1")).toBePresent();
      expect(wrapper.find("h1").node.innerHTML).toContain("These are Your Bookshelves");
      done();
    }, 0);
  });
})
