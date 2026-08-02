import React from 'react';
import appwriteService from "../appwrite/config";
import {Link} from 'react-router-dom';
import parse from "html-react-parser";
import styled from "styled-components";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import { useSelector } from 'react-redux';

function PostCard({$id, title,content, status, featuredImage}) {
  const isAuthenticated= useSelector((state) => state.auth.status); 

  return (
       <StyledLink to={isAuthenticated ? `/post/${$id}` : "/login"}>
      <Card>

        <ImageWrapper>
          {/* {featuredImage ? (
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
            />
          ) : (
            <Placeholder>
              <FiFileText size={42} />
            </Placeholder>
          )} */}
        </ImageWrapper>

        <Status className={`${status}`}>{status}</Status>

        <Title>{title}</Title>

        <Content>
          {parse(content?.slice(0, 180) + "...")}
        </Content>

        <Footer>
          <span>Read More</span>
          <FiArrowUpRight />
        </Footer>
      </Card>
    </StyledLink>
  )
}


const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  padding: 22px;
  border-radius: 24px;

  background: #d6dbe3;

  border: 1px solid rgba(255,255,255,.06);

  transition: .4s;

  &:hover{
    border-color:#44d8ff;
  }
  &:hover ${''} img{
    transform: scale(1.18);
  }
`;


const ImageWrapper = styled.div`
`;

// const Placeholder = styled.div`
//   width:100%;
//   height:100%;
//   display:grid;
//   place-items:center;
//   color:#66dcff;
// `;

const Status = styled.span`
  display:inline-block;
  padding:6px 14px;
  border-radius:999px;
  background:rgba(31, 166, 204, 0.696);
  color:#f5f5f5;
  font-size:13px;
  margin-bottom:14px;
  text-transform:capitalize;
  &.inactive{
    background:rgba(204, 51, 31, 0.696);
  }
`;

const Title = styled.h2`
  color:#000;
  font-size:1.35rem;
  font-weight:700;
  line-height:1.4;
  margin-bottom:12px;

  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
`;

const Content = styled.div`
  color:#4b4c50;
  font-size:.95rem;
  line-height:1.7;

  display:-webkit-box;
  -webkit-line-clamp:4;
  -webkit-box-orient:vertical;
  overflow:hidden;
  display: flex;

  p{
    margin:0;
  }
`;

const Footer = styled.div`
  margin-top:24px;

  display:flex;
  align-items:center;
  justify-content:space-between;

  color:#626262;
  font-weight:600;

  svg{
    transition:.35s;
  }

  ${Card}:hover & svg{
    transform:translate(6px,-6px);
  }
`;

export default PostCard