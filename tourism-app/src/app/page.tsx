import { fetchItem } from '../../utils/umbracoContentDeliveryApi';
import Layout from './layout';

export default async function Page() {
  const homepage = await fetchItem(''); // Fetch data during build
  return (
    <Layout>
    <div>
      <h1>{homepage.properties.title}</h1>
      <h2>sinnan test</h2>
      <pre>{JSON.stringify(homepage, null, 2)}</pre>
    </div>
    </Layout>
  );
}
