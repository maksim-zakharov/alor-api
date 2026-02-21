import React from 'react';
import { Redirect } from '@docusaurus/router';

/**
 * Редирект с главной на введение (с учётом baseUrl)
 */
export default function Home(): React.ReactElement {
  return <Redirect to="/docs/intro" />;
}
