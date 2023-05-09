<script>
  import { Router, Link, Route } from "svelte-navigator";
  import About from "./pages/About.svelte";
  import Blog from "./pages/Blogs.svelte";
  import Blogs from "./pages/Blogs.svelte";
</script>

<Router>
  <nav>
    <Link to="/me/">About</Link>
    <Link to="/me/blogs">Blog</Link>
  </nav>

  <div>
    <Route path="/me/*">
      <Route path="/">
        <About />
      </Route>

      <Route path="blogs/*">
        <Route path="/">
          <Blog />
        </Route>
      </Route>
    </Route>
  </div>
</Router>

<style>
</style>
