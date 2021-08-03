<template>
  <div class="comment">
    <img
      src="@/../public/images/testStatic/femaleProfile3.jpg"
      alt="Nom du profil"
      class="commentPictureProfile"
    />
    <div class="commentContent bg-info">
      <div class="commentContentHeader">
        <p class="commentContentHeaderNameProfile text-primary">
          Bluebear234
        </p>
        <p class="commentContentHeaderTimePost text-secondary">
          Il y a 9h
        </p>
        <div class="commentContentHeaderEllipsisMenu">
          <EllipsisMenu 
          :small="true"
          FirstLineText="Signaler le commentaire"
          SecondLineText="Supprimer le commentaire"
          typeToErase="comment"
          />
        </div>
      </div>
      <p class="commentContentComment">
        Perspiciatis minus quaerat ut aut fugiat non eos qui et.
      </p>
      <div class="commentContentWhiteLine bg-light"></div>
      <div class="commentContentInteractions">
        <div class="commentContentInteractionsFire">
          <OnFire :small="true"/>
        </div>
        <p class="commentContentInteractionsPercentage text-secondary">
          50 %
        </p>
        <div class="commentContentInteractionsSnow">
          <Cold :small="true"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EllipsisMenu from "@/components/post/PostEllipsisMenu.vue";
import OnFire from "@/components/icons/OnFire.vue";
import Cold from "@/components/icons/Cold.vue";

export default {
  name: "PostComment",
  components: {
    EllipsisMenu,
    OnFire,
    Cold,
  },
};
</script>

<style scoped lang="scss">
.comment {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem 0;
  width: 92%;
  &PictureProfile {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin: 0 2%;
    object-fit: cover;
    object-position: center;
  }
  &Content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    border-radius: 15px;
    &Header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: 0.5rem 0;

      &NameProfile {
        margin: 0;
      }
      &TimePost {
        margin: 0;
      }
    }
    &Comment {
      width: 90%;
    }
    &WhiteLine {
      width: 80%;
      height: 0.2rem;
      border-radius: 25px;
    }
    &Interactions {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 90%;
      max-width: 260px;
      margin: 0.5rem 10%;
      &Fire {
        font-size: 1.4rem;
      }
      &Percentage {
        font-weight: 700;
        margin: 0;
      }
      &Snow {
        font-size: 1.4rem;
        color: rgb(107, 159, 255);
      }
    }
  }
}
</style>
