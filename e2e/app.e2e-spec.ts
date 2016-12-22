import { MovieLandPage } from './app.po';

describe('movie-land App', function() {
  let page: MovieLandPage;

  beforeEach(() => {
    page = new MovieLandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
