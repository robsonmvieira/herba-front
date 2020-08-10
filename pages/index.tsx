import Head from 'next/head'
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="col-6">
          <Button color="primary" size="sm">First Button</Button>
        </div>
      </div>


    </div>
  )
}
