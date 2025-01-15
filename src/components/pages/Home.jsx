import data from '../../db/db'
import Card from '../molecules/Card';

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {data.map((item, index) => (
      <Card
        key={index}
        title={item.title}
        path={item.path}
        content={item.content.slice(0, 100) + '...'}  // Potong konten agar tidak terlalu panjang
        publish_date={item.publish_date}
        tags={item.tags}
      />
    ))}
  </div>
  );
};

export default Home;
