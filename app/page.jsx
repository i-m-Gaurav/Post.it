import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Write & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Fun posts</span>
    </h1>
    <p className='desc text-center'>
      Post<span className='orange_gradient text-center'>!T</span> is an open-source place for sharing and discovering fun posts. </p>

    <Feed />
  </section>
);

export default Home;
