import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import { icons } from '@/components/icons/icons'
import LargeIcon from '@/components/icons/large-icon/LargeIcon'
import TextContainer from '@/components/containers/text-container/TextContainer'
import MediumHeader from '@/components/typography/headers/medium-header/Mediumheader'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import ColumnPageContainer from '@/components/containers/column-page-container/ColumnPageContainer'
import ColumnContentContainer from '@/components/containers/column-content-container/ColumnContentContainer'

export default function ZizekPageComponent() {
  return (
    <ColumnPageContainer bgColor='bg-green'>
      <PageHeader>Zizek Policy</PageHeader>
      <LargeIcon
        icon={icons.bath.path}
        xmlns={icons.bath.xmlns}
        viewBox={icons.bath.viewBox}
        className={`bg-black fill-vibrant-pink`}
      />
      <ColumnContentContainer>
        <TextContainer>Last updated: May 8, 2025</TextContainer>

        <MediumHeader className='bg-red'>
          {' '}
          The Žižek Clause (Ideology Disclosure Agreement)
        </MediumHeader>
        <TextContainer>
          What the user encounters upon entering this website is not merely an
          interface — a set of navigable containers and links — but a structured
          absence: the constitutive lack that grounds the user experience as
          such. Far from being a &quot;neutral&quot; platform for interaction,
          the site is already overdetermined by its position within the symbolic
          order (i.e., the implicit network of ideological operations that frame
          what is visible, clickable, or even thinkable).
        </TextContainer>

        <TextContainer>
          The fundamental mistake — one might even say fantasy — of the
          contemporary web user lies in the belief that by rejecting cookies,
          turning off tracking, or toggling dark mode, one is somehow
          extricating oneself from the ideological matrix. On the contrary:
          these gestures are themselves the very form ideology takes today —
          that of choice structured by its own foreclosure. One chooses only
          within the parameters that have already been chosen.
        </TextContainer>

        <TextContainer>
          To &quot;agree&quot; to a site&apos;s policies is to enact a ritual of
          consent whose function is not juridical but libidinal. The very notion
          that a user can meaningfully “consent” — via checkbox, via scrolling —
          presupposes a subject that is already fully constituted. But the
          subject of the web is split, caught between the demand to enjoy
          (stream, shop, scroll) and the injunction to be responsible (read the
          policy, manage settings). Thus emerges the obscene underside of
          interactivity: the more options are presented, the more deeply the
          subject is interpolated into a framework they neither authored nor can
          escape.
        </TextContainer>

        <TextContainer>
          In this sense, to engage with this website is not to enter into a
          contractual relationship in the liberal sense, but to submit to a
          symbolic mandate — to accept, unconsciously, a particular ordering of
          space, value, and time. The header animates here rather than there;
          the body scrolls this way, not that. Even the aesthetic of minimalism
          (clean lines, white space, typographic restraint) is itself a fantasy
          of ideological transparency — the fantasy that ideology can somehow be
          bracketed, made clean, reduced to &quot;just design.&quot;
        </TextContainer>

        <TextContainer>It cannot. There is no outside-the-site.</TextContainer>

        <TextContainer>
          To proceed is not to consent in the legal sense, but to identify —
          however provisionally — with the subject-position this structure makes
          available. If you find this troubling, the appropriate response is not
          to exit the site, but to ask: why was I comfortable in the first
          place?
        </TextContainer>

        <TextContainer>
          The ultimate gesture of freedom is not to resist the system, but to
          recognize that even resistance has already been commodified.
        </TextContainer>
      </ColumnContentContainer>
      <InternalLinkBox href='/contact'>Contact Me</InternalLinkBox>
    </ColumnPageContainer>
  )
}
