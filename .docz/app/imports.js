export const imports = {
  'documentation/hello.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-hello" */ 'documentation/hello.mdx'),
}
