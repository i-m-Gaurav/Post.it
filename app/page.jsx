import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Creative prompts</span>
    </h1>
    <p className='desc text-center'>
      Prompt<span className='orange_gradient text-center'>Store</span> is an open-source prompting tool to discover, create and share creative prompts for modern world.</p>

    <Feed />
  </section>
);

export default Home;
