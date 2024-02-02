import { Breadcrumbs, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import AnimationWrapper from './Animation';

const Breadcrumb = ({ activeLink }) => {
  const router = useRouter();
  const { pathname } = router;

  // Split the pathname into segments
  const segments = pathname.split('/').filter((segment) => segment !== '');

  return (
    <AnimationWrapper>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const path = `/${segments.slice(0, index + 1).join('/')}`;

          return (
            <span key={index}>
              {isLast ? (
                <Typography color="textPrimary">{activeLink}</Typography>
              ) : (
                <Link underline="hover" color="inherit" href={path}>
                  {segment}
                </Link>
              )}
            </span>
          );
        })}
      </Breadcrumbs>
    </AnimationWrapper>
  );
};

export default Breadcrumb;
