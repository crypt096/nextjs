import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perspiciatis reprehenderit nam fuga magni non perferendis incidunt, dicta alias, nostrum nisi, atque tempora voluptatum consectetur! Id laudantium hic nihil dolor vel necessitatibus pariatur tempora sed aspernatur quae asperiores voluptatibus at porro, voluptate consequatur officia suscipit natus perspiciatis blanditiis aperiam excepturi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus illum earum magni iusto voluptatum? Dolorem explicabo quo sint eum deleniti voluptatum facere nemo. Itaque aliquid dolorum ab suscipit magni. Ipsa fugiat voluptatum quas debitis expedita eligendi ab perspiciatis deserunt iste necessitatibus. Voluptatibus, possimus magni ab ut aliquam reiciendis commodi!</p>
      <Link href="/ninjas"><a>See Ninja Listing</a></Link>
      <Footer />
    </div>
  )
}
