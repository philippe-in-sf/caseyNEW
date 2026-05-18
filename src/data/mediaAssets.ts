export const featuredVideo = {
  title: 'Casey Cantwell Performance Video',
  youtubeId: 'As2zlef5PlY',
  sourceUrl: 'https://www.youtube.com/watch?v=As2zlef5PlY',
};

type OrganImage = {
  id: number;
  title: string;
  filename: string;
  source: string;
};

const apiImageBase = 'https://api.pipeorgandatabase.org/uploads/images';

const pipeOrganImages: OrganImage[] = [
  { id: 5506, title: 'Church exterior', filename: 'cfSVSw_d9018422903f41d98c00c1c5e053e3d0_635c3e3a5557b.image.jpg', source: 'Photograph by tulsapeople.com, submitted by Jeff Scofield' },
  { id: 5507, title: 'Toe stud terrace and swell shoes', filename: 'F-t1Hg_c5b79c21a393461892114108113b5993_IMG_5013.jpg', source: 'Photograph by Jeff Scofield' },
  { id: 5508, title: 'Coupler rail', filename: 'KSZjPg_fdad20f3c26f42f8a29bb12a72841f94_IMG_5016.jpg', source: 'Photograph by Jeff Scofield' },
  { id: 5509, title: 'Console center', filename: '1nCODw_d205033abb4c4487a94fb9c05ca6d3b1_IMG_5017.jpg', source: 'Photograph by Jeff Scofield' },
  { id: 5510, title: 'Chancel, console and organ chamber', filename: '3Cw0kg_8391e7ba06cf47e596e5a75e87769d1c_IMG_4961.jpg', source: 'Photograph by Jeff Scofield' },
  { id: 5511, title: 'Trompette Fanfare and Antiphonal', filename: 'G0qQwA_a7f943b1b49340dfb049dceb16f8c5de_IMG_4955.jpg', source: 'Photograph by Jeff Scofield' },
  { id: 5512, title: 'Church interior', filename: 'OMdgYA_a3f9bfb1c881465e89a329b821209044_IMG_4957.jpg', source: 'Photograph by Jeff Scofield, submitted by Jeff Scofield' },
  { id: 18309, title: 'Builder nameplate', filename: 'tsHjBA_f715a09dc9b947f0b953a68be651af59_tulsa_plate_010722.jpg', source: 'Photograph by Joshua P. Miller, via Facebook, submitted by Jeff Scofield' },
  { id: 18310, title: 'Chancel', filename: 'qgDQsg_743cac554e3d408380d4596698ef68aa_tulsa_chancel.jpg', source: 'Photograph by Joshua P. Miller, via Facebook, submitted by Jeff Scofield' },
  { id: 18311, title: 'Trompette Fanfare', filename: 'N63hIA_edeac30443674c7dab5c3d9a81cb1b56_tulsa_antiph.jpg', source: 'Photograph by Joshua P. Miller, via Facebook, submitted by Jeff Scofield' },
  { id: 18312, title: 'Right stopjamb', filename: 'WZcqmg_638c4bd057074628ae5a29871f7fc340_IMG_5014.jpg', source: 'Photograph by Joshua P. Miller, via Facebook, submitted by Jeff Scofield' },
  { id: 18313, title: 'Left stopjamb', filename: 'vftbGg_9528763f263d4ce9bc1c6dcae0b4b855_tulsa_left_joshua_p_miller_010722.jpg', source: 'Photograph by Joshua P. Miller, via Facebook, submitted by Jeff Scofield' },
  { id: 18314, title: 'Console', filename: '7mYd7A_15182127a5e64ad49815a1bb734c83e4_tulsa_console.jpg', source: 'Photograph by Joshua P. Miller, via Facebook, submitted by Jeff Scofield' },
  { id: 36353, title: 'Altar and Pipe Displays', filename: 'wRUjOw_OKTulsa.TrinityEpisc.1961MPMoller.Contrib18.20190921.011526.jpg', source: 'Moller promotional photograph; image from collection of Jeff Scofield (1961)' },
  { id: 36355, title: 'Trompette Fanfare', filename: 'uf3NiQ_OKTulsa.TrinityEpisc.1961MPMoller.Contrib18.20190921.011903.jpg', source: 'Moller promotional photograph; image from collection of Jeff Scofield (1961)' },
  { id: 40365, title: 'Console', filename: 'gL0WxA_3173977f05d64d598393ea61775088ae_IMG_5009.jpg', source: 'Photograph by Jeff Scofield' },
  { id: 40379, title: 'Console', filename: 'y_9Zqg_OKTulsa.TrinityEpisc.1961MPMoller.Contrib3.20190102.031925.jpg', source: 'Photograph by Jeff Scofield' },
  { id: 43776, title: 'Nave, Gallery, and Antiphonal Pipe Display', filename: 'gyFznA_99cbab087be44a519e181ffcbd6832ad_IMG_4962.jpg', source: 'Photograph by Jeff Scofield' },
  { id: 43777, title: 'Sanctuary Interior and Chancel', filename: 'YC1U1A_bffb0f1af86c4eafa4436abf9bf65cdf_IMG_4958.jpg', source: 'Photograph by Jeff Scofield' },
  { id: 66642, title: 'Grillework and Pipe Display', filename: 'YES5SQ_OKTulsa.TrinityEpis.1961Moller.Scofield02.jpg', source: 'Photo by Jeff Scofield' },
];

export const organGallery = pipeOrganImages.map((image) => ({
  ...image,
  imageUrl: `${apiImageBase}/${image.filename}`,
}));
