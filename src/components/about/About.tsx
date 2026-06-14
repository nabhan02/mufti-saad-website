function BioSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3
        className="text-xl font-bold mb-4"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        {heading}
      </h3>
      <div
        className="space-y-4 text-base leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {children}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-5">
          {/* Bio */}
          <div className="md:col-span-3 space-y-12">
            <BioSection heading="Education">
              <p>
                Mufti Saad Haque was raised in the United States and began his
                Islamic studies at a young age. In 2010, he completed the
                memorization of the Qur&apos;an, marking the beginning of a
                lifelong journey in sacred knowledge. He pursued advanced
                Islamic studies at Darul Uloom New York, graduating from its
                rigorous Alimiyyah program in 2016 with a solid foundation in
                Tafsir, Hadith, Fiqh, Aqeedah, and Arabic.
              </p>
              <p>
                In 2018, he completed a post-graduate specialization in Islamic
                legal studies (Iftaa) from Darul Iftaa Mahmudiyyah in South
                Africa under the guidance of the late Mufti Ebrahim Desai (may
                Allah have mercy on him). This qualification enables him to
                issue Islamic legal rulings (fatāwā) with insight and relevance
                to contemporary challenges.
              </p>
            </BioSection>

            <BioSection heading="Masjid Leadership">
              <p>
                Since 2018, Mufti Saad has served as the Religious Director and
                Lead Imam of Zakaria Islamic Academy in Northern Virginia. In
                this role, he leads daily prayers, delivers Friday Khutbahs, and
                organizes a range of educational and spiritual programs
                including weekly lectures, monthly seminars, and classes for all
                ages.
              </p>
              <p>
                He provides Islamic counseling and pastoral care for
                individuals, couples, and families, offering guidance rooted in
                tradition and practical wisdom. As a Virginia state-recognized
                marriage officiant, he regularly performs nikahs and supports
                couples with premarital and marital counseling.
              </p>
              <p>
                Under his leadership, Zakaria Islamic Academy has expanded its
                educational offerings and community engagement. He collaborates
                with board members, teachers, and volunteers to build a
                welcoming environment focused on Qur&apos;anic learning,
                prophetic character, and spiritual development.
              </p>
            </BioSection>

            <BioSection heading="Community Work & Broader Impact">
              <p>
                Beyond his masjid responsibilities, Mufti Saad actively serves
                the wider Muslim community. He is a Director with Sara
                International Travel and regularly leads groups for Hajj and
                Umrah, offering both logistical coordination and spiritual
                mentorship to ensure a meaningful pilgrimage experience.
              </p>
              <p>
                He serves as a professional consultant with University Islamic
                Financial (UIF), where he assists individuals and families in
                navigating home financing and other Islamic financial solutions,
                connecting faith-based financial ethics with practical needs. He
                also partners with Human Appeal to support global humanitarian
                projects — raising funds and awareness for food security, orphan
                care, education, and emergency relief.
              </p>
              <p>
                Mufti Saad is a founding member of the DMV Ulama Council, a
                collective of scholars from the D.C., Maryland, and Virginia
                region. Through this platform, he addresses key religious
                concerns, facilitates inter-masjid cooperation, and contributes
                to unified scholarly guidance. He continues to teach advanced
                Islamic subjects such as Fiqh and Tafsir, aiming to help raise
                the next generation of American scholars who are classically
                trained and contextually grounded.
              </p>
            </BioSection>
          </div>

          {/* Credentials */}
          <div className="md:col-span-2">
            <div
              className="rounded-2xl p-8 md:sticky md:top-28"
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 24px oklch(25% 0.055 262 / 0.06)",
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Credentials
              </h3>

              <div className="space-y-6">
                <CredentialItem
                  label="Hafiz of the Qur'an"
                  value="Completed memorization of the Holy Qur'an (2010)"
                />
                <CredentialItem
                  label="Alimiyyah Program"
                  value="Tafsir, Hadith, Fiqh, Aqeedah & Arabic (2016)"
                  institution="Darul Uloom New York"
                />
                <CredentialItem
                  label="Iftaa Specialization"
                  value="Post-graduate Islamic legal studies — qualified to issue fatāwā (2018)"
                  institution="Darul Iftaa Mahmudiyyah, South Africa — under Mufti Ebrahim Desai (raḥimahullāh)"
                />
                <CredentialItem
                  label="Masjid Leadership"
                  value="Religious Director & Head Imam, Zakaria Islamic Academy (since 2018)"
                />
                <CredentialItem
                  label="Marriage Officiant"
                  value="Virginia state-recognized — nikah officiation & marital counseling"
                />
                <CredentialItem
                  label="Scholarly Leadership"
                  value="Founding Member, DMV Ulama Council"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialItem({
  label,
  value,
  institution,
}: {
  label: string;
  value: string;
  institution?: string;
}) {
  return (
    <div
      className="pb-6 last:pb-0"
      style={{ borderBottom: "1px solid var(--border-subtle)" }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-[0.2em] mb-1.5"
        style={{ color: "var(--blue-accent)" }}
      >
        {label}
      </p>
      <p className="text-sm font-medium leading-relaxed">{value}</p>
      {institution && (
        <p
          className="text-xs mt-1 italic"
          style={{ color: "var(--text-secondary)" }}
        >
          {institution}
        </p>
      )}
    </div>
  );
}
