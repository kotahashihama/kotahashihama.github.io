import { Button, Container, Typography } from '@mui/material';
import Head from 'next/head';
import tw from 'twin.macro';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kota Hashihama | Web Application Developer</title>
      </Head>

      <Container>
        <div>
          <Typography css={{ fontSize: '44px', textAlign: 'center' }}>
            Kota Hashihama
          </Typography>
          <img src="/images/kotahashihama.jpg" alt="Kota Hashihama" />

          <Button variant="contained">hoge</Button>
        </div>
      </Container>
    </>
  );
}
