import Head from 'next/head'
import Navbar from "./Navbar/Navbar"
import {FC} from 'react'

const PageContainer: FC = ({ children,...props}) => {

  return (
    <div>
      <Head >
        <meta
          name="keywords"
          content="Fendi Irfan Amorokhman, Fendi"
          title="Hi Im Fendi"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div className="">
        <Navbar />
        {children}
      </div>
    </div>
    
  )
}

export default PageContainer;