import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuth, useLoginWithRedirect, ContextHolder } from '@frontegg/react';

const Input = ({ user, comment, setComment, loading }) => {
  const location = useLocation();
  const loginWithRedirect = useLoginWithRedirect();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        className="avatar"
        alt="avatar"
        src={
          user?.profilePictureUrl
            ? user?.profilePictureUrl
            : '/user-non-avatar.png'
        }
        // src={user.photoURL ? user.photoURL : '/user-non-avatar.png'}
      />

      <div className="comment-control">
        {user ? (
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type={'text'}
            placeholder={'Write public comments...'}
          />
        ) : (
          <div className="not-comment">
            <h3>
              You need{' '}
              <Link
                // href={`https://app-1ivhele6gdhi.frontegg.com/oauth/account/login?redirect=${encodeURIComponent(
                //   location.pathname
                // )}`}
                onClick={() => loginWithRedirect()}
              >
                login
              </Link>{' '}
              to comment
            </h3>
          </div>
        )}
        {user ? (
          <button
            style={{
              opacity: loading ? 0.6 : 1,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
            disabled={loading}
            className="send-icon"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
