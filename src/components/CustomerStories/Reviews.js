import React from 'react'
import { Container} from 'react-bootstrap'

export default function Reviews() {
  return (
    <Container>
        <div className='text-center'>
            <p>Have something to say about Pulse? We’d love to hear it.</p>
            <a href='#!' style={{color: '#00ad6a'}}>Tell us your story</a>.
            <br/><br/><br/>
        </div>
        <div className='reviews-grid'>
            <div className='border rounded-0 card p-3'>
                <p>“Cash flow is king, and yet, there are no tools to properly manage it. I think Pulse is really onto something. It took me about an hour to finish entering all of my inflows and outflows and share it with the other partners. I now have a really clear idea of where I need to tighten things up to hit my goals.”</p>
                <small>
                    <strong>Navid Safabakhsh</strong>,&nbsp;
                    <a href="#!"style={{color: '#00ad6a'}}> Freshout</a>
                </small>

            </div>

            <div className='border rounded-0 card p-3'>
                <p>
                    “Pulse is perfect for those of us who are not accounting-minded and need something more automated than an Excel spreadsheet and less complicated than Quickbooks.”
                </p>
                <small>
                    <strong>Scott Allen, Founder/CCO</strong>, &nbsp;
                    <a href='#!'style={{color: '#00ad6a'}}>Monkeyfoot Interactive</a>
                </small>
            </div>

            <div className='border rounded-0 card p-3'>
                <p>
                    “Pulse is the only app that has allowed me to easily see how my cash flow changes if I add additional income or expenses and plan accordingly. I would rebuild Pulse as a spreadsheet if you guys stopped offering it.”
                </p>
                <small>
                    <strong>Daryl Freier, Fine Council</strong>
                </small>
            </div>

            <div className='border rounded-0 card p-3'>
                <p>
                    “Pulse is exactly the application I was looking for when I was trying to figure out how to track eight accounts in a single view. It was very difficult with Excel and beyond my accounting skills.”
                </p>
                <small>
                    <strong>Karin Armstrong</strong>, &nbsp;
                    <a href='#!'style={{color: '#00ad6a'}}>UVic.CA</a>
                </small>
            </div>

            <div className='border rounded-0 card p-3'>
                <p>
                    “Our company, which has offices in Milan, Italy and a network of more than 400 consultants worldwide, has been using Pulse for some weeks, and we love it because it’s simple and totally web-based.”
                </p>
                <small>
                    <strong>Simone Lovati, founder</strong>, &nbsp;
                    <a href='#!'style={{color: '#00ad6a'}}>Fashionbi.com</a>
                </small>
            </div>

            <div className='border rounded-0 card p-3'>
                <p>
                    “Thank you for developing Pulse App. I have been using Excel to manage my cash flow for years, as there was no robust online alternative available. Pulse is excellently designed and has no junk features. It’s nice and simple and does an excellent job!”
                </p>
                <small>
                    <strong>Niall Kearns</strong>
                </small>
            </div>

            <div className='border rounded-0 card p-3'>
                <p>
                    “Pulse gives me a fluid overview of my cash flow that I can not achieve using my accounting package.”
                </p>
                <small>
                    <strong>Rachel</strong>, &nbsp;
                    <a href='#!'style={{color: '#00ad6a'}}>Boost New Media</a>
                </small>
            </div>
        </div>

    </Container>
  )
}
