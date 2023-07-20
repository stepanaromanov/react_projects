import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Row,
    Section,
    Text,
    Column
  } from '@react-email/components';

  import logo from "../assets/str-logo.png";
  import footerImage from "../assets/str-footer.png";
  import twLogo from "../assets/tw-logo.png";
  import liLogo from "../assets/li-logo.png";
  import fbLogo from "../assets/fb-logo.png";

  /* 
  const baseUrl = process.env.IMAGES_URL
  ? `https://${process.env.IMAGES_URL}`
  : ''; 
  */
  
  interface EmailProps {
    prospectName: string;
    senderName: string;
  }

  //styles

  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '580px',
  };
  
  const heading = {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: '700',
    color: '#484848',
  };
  
  const paragraph = {
    fontSize: '18px',
    lineHeight: '1.4',
    color: '#484848',
  };
  
  const button = {
    backgroundColor: '#973098',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '18px',
    fontWeight: '500',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    width: '100%',
  };
  
  const link = {
    ...paragraph,
    color: '#973098',
    display: 'block',
  };
  
  const reportLink = {
    fontSize: '14px',
    color: '#9ca299',
    textDecoration: 'underline',
  };
  
  const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
  };
  
  const footer = {
    color: '#9ca299',
    fontSize: '14px',
    marginBottom: '10px',
  };

  const containerContact = {
    marginTop: '2rem',
    backgroundColor: '#f6e0f6',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    paddingLeft: '20px',
    zIndex: "-1"
  };

  const imageLogo = {
    marginBottom: "2rem"
  };
  
  export const Email = ({
      prospectName,
      senderName
    }: EmailProps) => {
  
    return (
      <Html>
        <Head />
  
        <Body style={main}>
          <Section style={main}>
            <Container style={container}>
              <Section style={imageLogo}>
                <Img
                    src={logo as string} 
                    width="70"
                    alt="STR"
                  />
              </Section>
              <Section style={{ paddingBottom: '20px' }}>
                <Row>
                  <Text style={heading}>Hi {prospectName},</Text>
                  <Text style={{ ...paragraph, paddingBottom: '16px' }}>
                      I noticed that you seemed interested in some of the products on our website. If you have any questions, please feel free to reach out. I'd be happy to guide you through the different options.
                  </Text>
                  <Text style={{ ...paragraph, paddingBottom: '16px' }}>
                      I want to extend to you an offer for a free trial as it can be tough to commit to a product from a mere description. Our free trial lasts 30 days and lets you navigate all the features from the comfort of your home. It's a great chance to see which product is right for you and how much it can benefit you and your clients.
                  </Text>
                  <Text style={{ ...paragraph, paddingBottom: '16px' }}>
                      If you're interested, email me back or give me a call. I can talk you through all the details and get you set up.
                  </Text>  
                  <Button pY={19} style={button} href="#">
                    BOOK A CALL
                  </Button>
                  <Text style={{ ...paragraph, paddingTop: '16px' }}>
                    Cheers, <br/>
                    {senderName}
                  </Text> 
                </Row>
              </Section>
  
              <Hr style={hr} />

              <Section>
                <Row>
                  <Text style={{ ...paragraph, fontWeight: '700' }}>
                    Common questions
                  </Text>
                  <Text>
                    <Link href="#" style={link}>
                      What problems our products solve?
                    </Link>
                  </Text>
                  <Text>
                    <Link href="#" style={link}>
                      How would our products impact your ability to meet your goals?
                    </Link>
                  </Text>
                  <Text>
                    <Link href="#" style={link}>
                      What level of support we provide for you to reach peak performance?
                    </Link>
                  </Text>
                  <Section style={containerContact}>
                    <Text style={paragraph}>
                      Follow us
                    </Text>
                    <Column style={{ paddingRight: '8px' }}>
                      <Link href="#">
                        <Img
                          width="22"
                          height="22"
                          src={twLogo as string}
                        />
                      </Link>
                    </Column>
                    <Column style={{ paddingRight: '8px' }}>
                      <Link href="#">
                        <Img
                          width="20"
                          height="20"
                          src={fbLogo as string}
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="#">
                        <Img
                          width="21"
                          height="21"
                          src={liLogo as string}
                        />
                      </Link>
                    </Column>
                    <Img
                      src={footerImage as string}
                      width="100%"
                    />
                  </Section>
                  <Text style={footer}>
                      STR, Inc., 13 5th Ave., Suite 1313, New York, NY 13013 
                  </Text>
                  <Link href="#" style={reportLink}>
                      Unsubscribe
                  </Link>
                  <Link href="#" style={{...reportLink, paddingLeft: "15px"}}>
                      Privacy
                  </Link>
                  <Link href="#" style={{...reportLink, paddingLeft: "15px"}}>
                      Manage Preferences
                  </Link>
                </Row>
              </Section>
            </Container>
          </Section>
        </Body>
      </Html>
    );
  };
  
  export default Email;