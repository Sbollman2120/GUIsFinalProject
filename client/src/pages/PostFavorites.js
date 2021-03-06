import React, { useEffect } from "react";
import { CollectionItem, Collection } from "../Components/CollectionList";
import DeleteBtn from "../Components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";
import Nav from "../Components/Nav/index";
import Wrapper from "../Components/Wrapper/index";
import { Container, Row } from "../Components/Grid/index";


const PostFavorites = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_FAVORITES });
  };

  const removeFromFavorites = id => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: id
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
    <Nav />
    <Wrapper id="favorites-style">
    <Container>
      <Row>
        <div className=" col s12 m12 l12">
          <div className="card small horizontal black">
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Favorite Posts</h1>
      {state.favorites.length ? (
        <Collection>
          <h3 className="mb-5 mt-5">Click on a post to view in detail</h3>
          {state.favorites.map(post => (
            <CollectionItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.header} by {post.username}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromFavorites(post._id)} />
            </CollectionItem>
          ))}
        </Collection>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="/Members">Back to home</Link>
      </div>
    </div>
    </div>
    </div>
    </Row>
    </Container>
    </Wrapper>
    </>
  );
};

export default PostFavorites;
