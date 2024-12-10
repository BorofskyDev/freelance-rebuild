import PageHeader from "@/components/typography/headers/page-header/PageHeader";
import { icons } from "@/components/icons/icons";
import LargeIcon from "@/components/icons/large-icon/LargeIcon";
import styles from './page.module.scss'
import TextContainer from "@/components/containers/text-container/TextContainer";
export default function PiracyPolicyPage() {
    return (
      <main className={`bg-blue ${styles.piracyPage}`}>
        <PageHeader>Piracy Policy</PageHeader>
        <LargeIcon
          icon={icons.pirate.path}
          xmlns={icons.pirate.xmlns}
          viewBox={icons.pirate.viewBox}
          className={`bg-dark fillLight`}
        />
        <div className={styles.content}>
          <TextContainer>
            Introduction - Settin&apos; Sail Together Ahoy, matey! By
            hoistin&apos; yer sails and visitin&apos; our ship ye agree to abide
            by this Piratey Policy. If ye don&apos;t agree, walk the plank and
            find yerself elsewhere!
          </TextContainer>
          <TextContainer>
            What Booty We Be Collectin&apos; - We be gatherin&apos; the
            following treasures from our crew: <br /> Personal Details: Yer
            name, email address, and pirate aliases. <br /> Voyage Logs: Pages
            ye be visitin&apos; and the treasures ye seek.
            <br /> Communication Bottles: Messages ye send via our channels.
          </TextContainer>
          <TextContainer>
            How We Use Yer Loot The booty we collect be used to - <br />
            Improve Our Ship: Enhance yer navigational experience. <br /> Send
            Ye Parrot Post: Keep ye informed with our latest plunders and
            updates.
            <br /> Guard Against Landlubbers: Protect our treasure from
            scallywags and nosy pirates.
          </TextContainer>
          <TextContainer>
            Sharing the Plunder We might share yer booty with: <br />
            Trusted Crew Members: Only those who swear on the Jolly Roger.
            <br /> Lawful Authorities: If the King’s men demand it, we comply.
            <br /> Pirate Partners: Fellow buccaneers we trust to keep the
            secrets safe.
          </TextContainer>
          <TextContainer>
            Protectin&apos; the Chest: Security Measures We be protectin&apos;
            yer treasure with: <br />
            Locked Chests: Encryption and secure storage. <br />
            Guarded Decks: Regular security checks to fend off invaders. <br />{' '}
            Alarm Bells: Alerts for any suspicious activity on our ship.
          </TextContainer>
          <TextContainer>
            Yer Rights on the High Seas Ye have the right to: <br />
            Access Yer Treasure: Request to see what we hold. <br />
            Change Yer Sails: Update yer personal details anytime.
            <br /> Drop Anchor: Request the deletion of yer information from our
            logs.
          </TextContainer>
          <TextContainer>
            Changes to This Piratey Policy From time to time, we may chart a new
            course and update this policy. We&apos;ll hoist the new policy on
            our mast, and it&apos;ll take effect immediately upon posting. Keep
            a weather eye out for any changes!
          </TextContainer>
          <TextContainer>
            Acceptance of Terms By continuin&apos; to sail with us, ye be acceptin&apos;
            all the terms laid out in this Piratey Policy. So tighten yer sails,
            hoist the anchor, and let&apos;s conquer the digital seas together!
          </TextContainer>
        </div>
      </main>
    )
}