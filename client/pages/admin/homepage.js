import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Admin Page</title>
            </Head>
            <h1>Admin Page</h1>
            <h4><Link href="/"><a>Back to home</a></Link></h4>
        </Layout>
    )
}