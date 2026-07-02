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
                Mufti Saad Haque grew up in New Jersey and began his Islamic
                education there before traveling to New York City to pursue
                higher traditional Islamic knowledge. He studied at Darul Uloom
                New York for nearly eleven years, completing the memorization of
                the Qur&apos;an (Hifdh) in 2009 and then graduating from the
                rigorous six-year Alim course in 2016 with a thorough grounding
                in Tafsir, Hadith, Fiqh, Aqeedah, Usool, and Arabic. During
                this time he received ijazaat (authorizations with chains of
                narration) in the six major books of Hadith and numerous other
                Islamic sciences.
              </p>
              <p>
                He then traveled to Darul Iftaa Mahmudiyyah in Durban, South
                Africa, where he studied for two years under the world-renowned
                scholar and Islamic finance expert, Mufti Ebrahim Desai (may
                Allah have mercy on him) — founder of askimam.org. Through
                rigorous training he was granted ijazah to issue legal verdicts
                (fatāwā), and gained advanced expertise in Islamic law,
                inheritance, and Islamic finance.
              </p>
            </BioSection>

            <BioSection heading="Masjid Leadership">
              <p>
                Since 2018, Mufti Saad has served as the Director of Religious
                Affairs of Zakaria Islamic Academy in Northern Virginia
                (ziacademy.org). In this role he leads all aspects of community
                life: daily and Jumu&apos;ah prayers, Taraweeh, Eid
                celebrations, daily and weekly lectures, youth programs,
                seminars, marriage counseling, mediations, fundraising, and the
                hiring and oversight of a team of more than a dozen Imams and
                teachers.
              </p>
              <p>
                He provides Islamic counseling and pastoral care for
                individuals, couples, and families, offering guidance rooted in
                tradition and practical wisdom. As a Virginia state-recognized
                marriage officiant, he regularly performs nikahs and supports
                couples with premarital and marital counseling.
              </p>
              <p>
                Since 2020, he has also served as an instructor at DarusSalam
                Seminary (masjidds.org) and the Maryland Institute of Deen
                (marylandinstitute.org), teaching advanced classical texts
                including Mukhtasar al-Qudoori, al-Hidayah, Tafseer
                al-Jalalayn, Usool as-Shashi, and al-Fawz al-Kabir to students
                nationwide.
              </p>
            </BioSection>

            <BioSection heading="Community Work & Broader Impact">
              <p>
                Beyond his masjid responsibilities, Mufti Saad actively serves
                the wider Muslim community. Since 2021, he has served as
                Director of Sara International Travel
                (sarainternationaltravel.com), leading groups annually for Hajj
                and Umrah — pairing trusted logistical coordination with
                scholarly mentorship for a meaningful pilgrimage experience.
              </p>
              <p>
                Since 2024, he serves as Resident Scholar for UIF
                (myuif.com), providing nationwide guidance on Islamic financing
                solutions for the American Muslim community. Since 2022, he has
                also served as Khateeb and fundraiser for multiple international
                charities — including Human Appeal (humanappealusa.org), LIFE
                for All (lifeusa.org), Muslim World League (mwlimits.org), and
                HHRD (hhrd.org) — helping raise millions of dollars for food
                security, orphan care, education, and emergency relief globally.
              </p>
              <p>
                Mufti Saad is a founding member of the DMV Ulama Council
                (dmvulama.org), executive board member of NAIF — North American
                Imams Fellowship (naifusa.org) — and a member of the Northern
                Virginia Imams Network (NVIN). He is fluent in English, Arabic,
                Urdu, and Bangla, enabling him to serve a broad spectrum of the
                American Muslim community. He frequently travels nationwide to
                deliver lectures, advise organizations, and support local and
                national initiatives.
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
                boxShadow: "0 4px 24px oklch(25% 0.046 320 / 0.06)",
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
                  label="Ḥifdhul Qur'ān"
                  value="Memorization of the Holy Qur'an with full ijazah (2009)"
                  institution="Darul Uloom New York — Jamaica, NY"
                />
                <CredentialItem
                  label="Alim Course / Islamic Theology"
                  value="Tafsir, Hadith, Fiqh, Aqeedah, Usool & Arabic (2010–2016)"
                  institution="Darul Uloom New York — ijazaat in the six major books of Hadith"
                />
                <CredentialItem
                  label="Iftaa (Mufti) Course"
                  value="Post-graduate Islamic jurisprudence & finance — qualified to issue fatāwā (2016–2018)"
                  institution="Darul Iftaa Mahmudiyyah, Durban, South Africa — under Mufti Ebrahim Desai (raḥimahullāh)"
                />
                <CredentialItem
                  label="Director of Religious Affairs"
                  value="Zakaria Islamic Academy, Northern Virginia (since 2018)"
                />
                <CredentialItem
                  label="Marriage Officiant"
                  value="Virginia state-recognized — nikah officiation & marital counseling"
                />
                <CredentialItem
                  label="Scholarly Leadership"
                  value="Founding Member, DMV Ulama Council · Exec. Board, NAIF · NVIN"
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
