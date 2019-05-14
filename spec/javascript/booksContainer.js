import testHelper from "./testHelper";
import fetchMock from "fetch-mock";
import BooksContainer from "../../app/javascript/react/containers/BooksContainer";
import Book from "../../app/javascript/react/components/Book";

describe("BooksContainer", () => {
  let wrapper
  let user_1 = {
    email: "user1@test.com",
    first_name: "name",
    image_url: "",
    access_token: "",
    access_token_secret: ""
  }

  let book_1 = {
    title: "title_one",
    author: "author",
    page_count: 235,
    description: "description",
    completed_reading: "true",
    publication_year: "1984",
    favorite: "false"
  }

  let book_2 = {
    title: "title_two",
    author: "author",
    page_count: 122,
    description: "description",
    completed_reading: "false"
  }

  let books = [
    book_1, book_2
  ]

  beforeEach(() => {
    fetchMock.get('/api/v1/books', {
      status: 200,
      body: { user: user_1, books: books }
    });
    wrapper = mount(<BooksContainer/>);
  });

  afterEach(fetchMock.restore);

  it("renders the Books Container on the page", done => {
    setTimeout(() => {
      expect(wrapper.find(BooksContainer)).toBePresent();
      done();
    }, 0);
  });

  it("renders an h1 tag that says 'Select a Book!'", done => {
    setTimeout(() => {
      expect(wrapper.find("h1")).toBePresent();
      expect(wrapper.find("h1").node.innerHTML).toContain("Select a Book!");
      done();
    }, 0);
  });
})
