<template>
  <div class="welcomeMessage">
    <div class="welcomeMessage">
      <div class="card container bg-light welcomeMessageCard">
        <div class="bg-primary welcomeMessageCardHeader">
          <h1 class="text-light welcomeMessageCardHeaderTitle">ShareMania</h1>
          <div class="welcomeMessageCardHeaderSubTitle">
            <div class="welcomeMessageCardHeaderSubTitleOnFireIcon">
              <OnFire :isActive="true" :infinite="true" :small="true" />
            </div>
            <p class="h6 text-light welcomeMessageCardHeaderSubTitleText">
              Le plus brûlant des réseaux sociaux
            </p>
            <div class="welcomeMessageCardHeaderSubTitleColdIcon">
              <Cold :isActive="true" :infinite="true" :small="true" />
            </div>
          </div>
        </div>
        <div class="welcomeMessageCardMain">
          <h2 class="text-primary welcomeMessageCardMainSubTitle">
            Premiere visite ?
          </h2>
          <p class="text-dark welcomeMessageCardMainText">
            ShareMania est une création qui a pour but de tester des
            technologies. Elle n'est pas destinée à être pleinement
            opérationnelle, même si elle s'en rapproche.
          </p>
          <div class="bg-primary welcomeMessageCardMainBlockPrimary">
            <h3 class="text-primary text-light welcomeMessageCardMainSubTitle">
              Besoin de plus d'informations ?
            </h3>
            <p class="text-primary text-white welcomeMessageCardMainText">
              Allez faire un tour sur
              <a href="https://ctch.dev/projects/sharemania" class="text-white">
                cette page de présentation du projet.</a
              >
              Vous pourrez en apprendre davantage sur les technologies
              utilisées.
            </p>
          </div>
          <h3 class="text-primary welcomeMessageCardMainSubTitle">Contact</h3>
          <a
            href="mailto:contact@sharemania.fr"
            class="text-dark welcomeMessageCardMainText"
          >
            contact@sharemania.fr
          </a>
          <h3 class="text-secondary welcomeMessageCardMainSubTitle">Auteur</h3>
          <p class="text-dark welcomeMessageCardMainText">
            Cyril Trichereau <br />
            <a
              href="mailto:contact@ctch.dev"
              class="text-dark welcomeMessageCardMainTextMail"
            >
              contact@ctch.dev
            </a>
          </p>
          <div class="welcomeMessageCardMainTextContact">
            <a
              href="https://github.com/CyrilTrichereau"
              class="bg-info welcomeMessageCardMainTextContactBlock"
            >
              GitHub :
              <img
                src="../../../public/images/gitHubIconTinyfied.png"
                alt="GitHub Logo"
                class="welcomeMessageCardMainTextContactBlockIcon"
              />
            </a>
            <a
              href="https://ctch.dev"
              class="bg-info welcomeMessageCardMainTextContactBlock"
            >
              Portfolio :
              <img
                src="@/../public/images/ctchIconTinyfied.jpg"
                alt="LinkedIn Logo"
                class="welcomeMessageCardMainTextContactBlockIcon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/cyril-trichereau-4b36a1b5/"
              class="bg-info welcomeMessageCardMainTextContactBlock"
            >
              LinkedIn :
              <img
                src="@/../public/images/linkedinIconTinyfied.png"
                alt="LinkedIn Logo"
                class="welcomeMessageCardMainTextContactBlockIconLinkedIn"
              />
            </a>
            <a
              href="mailto:contact@ctch.dev"
              class="bg-info welcomeMessageCardMainTextContactBlock"
            >
              Mail :

              <font-awesome-icon
                icon="envelope"
                class="text-primary welcomeMessageCardMainTextContactBlockLogo"
              />
            </a>
          </div>
        </div>
        <div class="welcomeMessageCardFooter">
          <Button
            text="Ne plus afficher"
            :secondary="true"
            @click="neverShowAgain"
          />
          <Button text="Fermer" @click="closePopIn" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/form/Button.vue";
import OnFire from "@/components/icons/OnFire.vue";
import Cold from "@/components/icons/Cold.vue";

export default {
  name: "WelcomeMessage",
  components: {
    Button,
    OnFire,
    Cold,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    closePopIn() {
      this.$emit("close-pop-in");
    },
    neverShowAgain() {
      localStorage.setItem("displayWelcomeMessage", false);
      this.closePopIn();
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.welcomeMessage {
  z-index: 40;
  width: 100%;
  padding: 0 0 4rem 0;
  position: relative;
  display: flex;
  top: 62px;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  overflow-x: scroll;
  scrollbar-width: thin;

  &Card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    max-width: 800px;
    margin-top: 2rem;
    padding: 0 0 2rem 0;

    &Header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      &FirstTitle {
        margin: 1rem 0 0 0;
      }
      &Title {
        margin: 0;
        font-size: 3rem;
      }
      &SubTitle {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        max-width: 450px;
      }
    }
    &Main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem 0.8rem;
      width: 100%;
      &BlockPrimary {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0 1rem;
      }
      &SubTitle {
        max-width: 480px;
        margin: 0;
        padding: 0.8rem 0 0 0;
        font-weight: 700;
        font-size: 1.2rem;
      }
      &Text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        max-width: 480px;
        margin: 0;
        padding: 0rem 0 0.8rem 0;
        &Contact {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          height: 100%;
          &Block {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            width: 110px;
            height: 140px;
            padding: 1rem;
            margin: 1rem;
            border-radius: 15px;
            box-shadow: 0 0 4px 0px rgb(210, 209, 218);
            color: black;
            &:hover {
              box-shadow: 0 0 10px 0px rgb(156, 153, 177);
            }
            &Icon {
              max-width: 80px;
              max-height: 80px;
              &LinkedIn {
                max-width: 65px;
                max-height: 65px;
              }
            }
            &Logo {
              width: 80px;
              font-size: 3rem;
            }
          }
        }
      }
    }
    &Footer {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      max-width: 450px;
    }
  }
}
@media (min-width: 992px) {
  .welcomeMessage {
    top: 0px;
    &Card {
      flex: 1 1 auto;
      margin-top: 10rem;
      &Header {
        &Title {
          font-size: 4rem;
        }
      }
    }
  }
}
a:hover {
  text-shadow: 0px 0px 1px rgb(0, 0, 0);
}
</style>
