import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-center">
          <Accordion defaultActiveKey="0">
            <Accordion.Item>
              <Accordion.Header>
                Difference Between Authorization And Authentication?
              </Accordion.Header>
              <Accordion.Body>
                From Hosting And Database, Through Static Storage, Messaging,
                Analytics, And App Distribution To Cloud Functions And Machine
                Learning, Firebase Is Truly An All-In-One Solution.Firebase API
                Is Simply A Pleasure To Work With.When Using NPM, Everything Is
                Structured Into Modules, Which Can Then Be Imported When Needed.
                An Important Detail That Boosts The API Usability Is Of Course
                Good Documentation. And Here, Firebase Also Doesn't Let
                Down.Firebase Is A De-Facto Standard And Go-To Choice For The
                Vast Majority Of Serverless Apps.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Header>
                Why Are You Using Firebase? What Other Options Do You Have To
                Implement Authentication?
              </Accordion.Header>
              <Accordion.Body>
                In Simple Terms, Authentication Is The Process Of Verifying Who
                I Am, While Authorization Is The Process Of Granting Permission
                To CloudHQ To Access My Cloud Accounts (Copy Files, Restore
                Emails, Etc.) On My Behalf.Authentication Is About Validating My
                Credentials Like User Name/User ID And Password To Verify My
                Identity. We Use The OpenID Connect Protocol For That. On The
                Other Hand, Occurs After My Identity Is Successfully
                Authenticated By CloudHQ. Then I Can Give Permission To CloudHQ
                To Access The Resources Such As Files, Emails. This Is Handled
                With The OAuth2 Protocol.So,Authorization Gives Our System The
                Ability To Access Our Data In The Cloud. Others Options Like
                Single-Factor/Primary Authentication ,Two-Factor Authentication
                (2FA) , Single Sign-On (SSO) ,Password Authentication Protocol
                (PAP) ,Certificate-Based Authentication,Extensible
                Authentication Protocol (EAP) Options I Can Implement For
                Authentication.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Header>
                What Other Services Does Firebase Provide Other Than
                Authentication
              </Accordion.Header>
              <Accordion.Body>
                Parse – Open Source Backend Platform; Back4app – Parse Hosting
                Platform; Kinvey – Mobile Backend As A Service (MBaaS) For The
                Enterprise; Backendless – Mobile Backend And API Services
                Platform; Kuzzle – Backend For Web, Hybrid, Or Native Mobile
                Apps And IoT Projects; Pubnub – Real-Time APIs And Global
                Messaging; Kumulos – App Performance Management; Game Sparks –
                Game Backend Platform; Hoodie – Generic Backend With A Client
                API For Offline First Applications; Appwrite – Open-Source
                Backend For Flutter Developers Deployd – Simple Core Library,
                With A Modular API For Your Application; NHost – Accelerates
                Development And Provides Full Control; Amplify JS – Open-Source
                Javascript Framework; Heroku – Platform As A Service Backed By
                Salesforce.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
