const {
    getMoviesPopulars,
    getMoviesPopularsbyGenre,
  } = require("../controllers/movies");
  const { getMockReq, getMockRes } = require("@jest-mock/express");

  
  describe("Movies Populars", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    test("Should return a list of popular movies", async () => {
      const req = getMockReq();
      const { res } = getMockRes();
  
      await getMoviesPopulars(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(expect.any(Object));
    });
  
    test("Should return a list of popular movies filtered by genre", async () => {
        const genres = { id: 28, name: "Action" };
    
        const req = getMockReq({
          params: { genreId: genres.id.toString() },
        });
        const { res } = getMockRes();
      
        await getMoviesPopularsbyGenre(req, res);
      
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({
              genre: { id: genres.id, name: genres.name }, 
              movies: expect.arrayContaining([
                expect.objectContaining({ genre_ids: expect.arrayContaining([28]) }), 
              ]),
            })
          );
      });
      
      test("Should return a 404 error if the genre does not exist", async () => {
        const genres = { id: 2888, name: "Action" };

        const req = getMockReq({
          params: { genreId: genres.id.toString() },
        });
        const { res } = getMockRes();
      
        await getMoviesPopularsbyGenre(req, res);
      
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({
            details: "Genre not found",
            error: "Une erreur est survenue lors de la récupération des films populaires par genre."
        });

      });
  });
  