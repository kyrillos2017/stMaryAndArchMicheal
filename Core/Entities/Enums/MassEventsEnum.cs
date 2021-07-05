using System.Runtime.Serialization;

namespace Core.Entities.Enums
{
    public enum MassEventsEnum
    {
        [EnumMember(Value = "Mass")]
        Mass,

        [EnumMember(Value = "PreMass")]
        PreMass,
    }
}